package main

import (
	"container/list"
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"os"
	"time"

	"./models"

	_ "github.com/denisenkom/go-mssqldb"
)

const (
	DB_INSTANCE = ".\\SQL2008R2INST"
	DB_USER     = "sa"
	DB_PASSWORD = "Wy0ming12"
	DB_NAME     = "MatrixLive20032017"
	OUTPUT_PATH = "D:\\Share\\QC\\JSONs\\Go_Output.json"
)

func main() {
	fmt.Println("Start at ", time.Now())
	db := connectDB()
	siteIds := getSiteIds(db)
	fmt.Println("site ids count: ", siteIds.Len())

	sites := make([]*models.Site, 0)

	for s := siteIds.Front(); s != nil; s = s.Next() {
		siteId := s.Value.(string)
		rows, err := db.Query("SELECT CAST(Id AS VARCHAR(36)) AS Id, ISNULL(AreaCode,''), ISNULL(City,''), ISNULL(CompanyName,'') AS Company, ISNULL(ContactPerson,''), ISNULL(Country,''), Deleted, ISNULL(District,'') AS DistributionTerritory, ISNULL(EMail,''), ISNULL(Integrator,''), ISNULL(Latitude,''), ISNULL(LocalNumber,''), ISNULL(Longitude,''), ISNULL(Name,''), ISNULL(PostalCode,''), ISNULL(State,''), ISNULL(Street1,''), ISNULL(Street2,''), ISNULL(TimeZone,'') FROM Sites WHERE Id = $1", siteId)
		checkErr(err)

		for rows.Next() {
			site := getSite(db, rows, siteId)

			sites = append(sites, &site)
		}
	}

	closeDB(db)

	data, err := json.Marshal(sites)
	checkErr(err)

	saveJsonData(data)

	fmt.Println("End at ", time.Now())
}

func getSiteIds(db *sql.DB) (siteIds list.List) {
	rows, err := db.Query("SELECT CAST(Id AS VARCHAR(36)) FROM Sites")
	checkErr(err)

	for rows.Next() {
		var id string
		rows.Scan(&id)
		siteIds.PushBack(id)
	}

	return siteIds
}

func getSite(db *sql.DB, rows *sql.Rows, siteId string) (site models.Site) {
	err := rows.Scan(&site.Id, &site.AreaCode, &site.City, &site.Company, &site.ContactPerson, &site.Country, &site.Deleted, &site.DistributionTerritory, &site.EMail, &site.Integrator, &site.Latitude, &site.LocalNumber, &site.Longitude, &site.Name, &site.PostalCode, &site.State, &site.Street1, &site.Street2, &site.TimeZone)
	checkErr(err)

	site.Screens = getScreensBySite(db, siteId)

	return site
}

func getScreensBySite(db *sql.DB, siteId string) (screens []models.Screen) {
	rows, err := db.Query("SELECT s.Deleted, ISNULL(s.ExternalId,''), CAST(s.Id AS NVARCHAR(36)) AS Id, ISNULL(s.[Ip Address],''), s.IsAtmos AS IsAtmosServer, ISNULL(s.[Mac Id],'') AS Mac, ISNULL(s.[Machine Name],'') AS MachineName, s.Name, ISNULL(s.Password,''), s.ScreenGroup, ISNULL(s.UserName,''), CAST(s.Server AS NVARCHAR(36)) AS ServerId FROM SiteScreens ss INNER JOIN Screens s ON s.Id = ss.Screen WHERE ss.Site = $1", siteId)
	checkErr(err)

	for rows.Next() {
		screen := getScreen(db, rows)

		screens = append(screens, screen)
	}

	return screens
}

func getScreen(db *sql.DB, rows *sql.Rows) (screen models.Screen) {
	var serverId string
	err := rows.Scan(&screen.Deleted, &screen.ExternalId, &screen.Id, &screen.IpAddress, &screen.IsAtmosServer, &screen.Mac, &screen.MachineName, &screen.Name, &screen.Password, &screen.ScreenGroup, &screen.UserName, &serverId)
	checkErr(err)

	screen.Server = getServer(db, serverId)

	return screen
}

func getServer(db *sql.DB, serverId string) (server models.Server) {
	server.Id = serverId
	server.Certificates = getServerCertificates(db, serverId)

	return server
}

func getServerCertificates(db *sql.DB, serverId string) (certificates []models.Certificate) {
	rows, err := db.Query("SELECT CAST(c.Id AS NVARCHAR(36)), c.EntityName, c.SubjectName, c.Type, c.Store, c.Hash, CAST(c.IssuedBy AS NVARCHAR(36)) FROM ServerCertificates sc INNER JOIN Certificates c ON c.Id = sc.Certificate WHERE sc.Server = $1", serverId)
	checkErr(err)

	for rows.Next() {
		certificate := getCertificate(rows)

		certificates = append(certificates, certificate)
	}

	return certificates
}

func getCertificate(rows *sql.Rows) (certificate models.Certificate) {
	rows.Scan(&certificate.Id, &certificate.EntityName, &certificate.SubjectName, &certificate.Type, &certificate.Store, &certificate.Hash, &certificate.IssuedBy)

	return certificate
}

func saveJsonData(jsonData []byte) {
	fout, err := os.Create(OUTPUT_PATH)
	checkErr(err)

	defer fout.Close()

	fout.Write(jsonData)
}

func connectDB() (db *sql.DB) {
	conDb := fmt.Sprintf("odbc:server=%s;user id=%s;password=%s;database=%s;connection timeout=600", DB_INSTANCE, DB_USER, DB_PASSWORD, DB_NAME)

	db, err := sql.Open("mssql", conDb)
	checkErr(err)

	return db
}

func closeDB(db *sql.DB) {
	defer db.Close()
}

func checkErr(err error) {
	if err != nil {
		log.Println(err)
	}
}
