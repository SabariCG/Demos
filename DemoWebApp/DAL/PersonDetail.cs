using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Text;

namespace DemoWebApp.DAL
{
    public class PersonDetail
    {
        public static string connectionString = ConfigurationManager.ConnectionStrings["DemoDatabaseConnection"].ConnectionString;

        Database db = new Database();

        public IEnumerable<Models.PersonDetail> GetPersonDetails(int timeZone, int country, int state, int city)
        {
            StringBuilder strBuilder = new StringBuilder();

            strBuilder.AppendLine("SELECT DISTINCT p.[Name], p.Gender, p.Age, tz.[Name] AS TimeZone, co.[Name] AS Country, st.[Name] AS [State], ci.[Name] AS City FROM PersonDetails p");
            strBuilder.AppendLine(" INNER JOIN TimeZones tz ON tz.Id = p.TimeZone");
            strBuilder.AppendLine(" INNER JOIN Countries co ON co.Id = p.Country");
            strBuilder.AppendLine(" INNER JOIN States st ON st.Id = p.[State]");
            strBuilder.AppendLine(" INNER JOIN Cities ci ON ci.Id = p.City");
            strBuilder.AppendLine("WHERE p.TimeZone = " + timeZone + " AND p.Country = " + country + " AND p.[State] = " + state + " AND p.City = " + city);

            DataTable personDetailsDt = db.GetDataTable(strBuilder.ToString());

            return _GetPersonDetail(personDetailsDt);
        }

        private IEnumerable<Models.PersonDetail> _GetPersonDetail(DataTable personDetailDt)
        {
            List<Models.PersonDetail> personDetails = new List<Models.PersonDetail>();

            if (personDetailDt != null && personDetailDt.Rows.Count > 0)
            {
                foreach (DataRow row in personDetailDt.Rows)
                {
                    Models.PersonDetail personDetail = new Models.PersonDetail();

                    personDetail.Name = row["Name"].ToString();
                    personDetail.Gender = row["Gender"].ToString();
                    personDetail.Age = row["Age"].ToString();
                    personDetail.TimeZone = row["TimeZone"].ToString();
                    personDetail.Country = row["Country"].ToString();
                    personDetail.State = row["State"].ToString();
                    personDetail.City = row["City"].ToString();

                    personDetails.Add(personDetail);
                }
            }

            return personDetails;
        }
    }
}