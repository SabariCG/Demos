package models

type Site struct {
	Id                    string   `json:"id"`
	AreaCode              string   `json:"areaCode"`
	City                  string   `json:"city"`
	Company               string   `json:"company"`
	ContactPerson         string   `json:"contactPerson"`
	Country               string   `json:"country"`
	Deleted               bool     `json:"deleted"`
	DistributionTerritory string   `json:"distributionTerritory"`
	EMail                 string   `json:"eMail"`
	Integrator            string   `json:"integrator"`
	Latitude              string   `json:"latitude"`
	LocalNumber           string   `json:"localNumber"`
	Longitude             string   `json:"longitude"`
	Name                  string   `json:"name"`
	PostalCode            string   `json:"postalCode"`
	State                 string   `json:"state"`
	Street1               string   `json:"street1"`
	Street2               string   `json:"street2"`
	TimeZone              string   `json:"timeZone"`
	Screens               []Screen `json:"screens"`
}
