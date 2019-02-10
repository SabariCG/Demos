using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;

namespace DemoWebApp.DAL
{
    public class Country
    {
        public static string connectionString = ConfigurationManager.ConnectionStrings["DemoDatabaseConnection"].ConnectionString;

        Database db = new Database();
        public IEnumerable<Models.Country> GetCountries()
        {
            DataTable countryDt = db.GetDataTable("SELECT * FROM Countries");

            return _GetCountries(countryDt);
        }

        private IEnumerable<Models.Country> _GetCountries(DataTable countryDt)
        {
            List<Models.Country> countries = new List<Models.Country>();

            if (countryDt != null && countryDt.Rows.Count > 0)
            {
                foreach (DataRow row in countryDt.Rows)
                {
                    Models.Country country = new Models.Country();

                    country.Id = int.Parse(row["Id"].ToString());
                    country.Name = row["Name"].ToString();
                    country.TimeZone = int.Parse(row["TimeZone"].ToString());
                    country.CountryCode = row["CountryCode"].ToString();

                    countries.Add(country);
                }
            }

            return countries;
        }
    }
}