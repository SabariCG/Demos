using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;

namespace DemoWebApp.DAL
{
    public class City
    {
        public static string connectionString = ConfigurationManager.ConnectionStrings["DemoDatabaseConnection"].ConnectionString;

        Database db = new Database();
        public IEnumerable<Models.City> GetCities()
        {
            DataTable cityDt = db.GetDataTable("SELECT * FROM Cities");

            return _GetCities(cityDt);
        }

        private IEnumerable<Models.City> _GetCities(DataTable cityDt)
        {
            List<Models.City> cities = new List<Models.City>();

            if (cityDt != null && cityDt.Rows.Count > 0)
            {
                foreach (DataRow row in cityDt.Rows)
                {
                    Models.City city = new Models.City();

                    city.Id = int.Parse(row["Id"].ToString());
                    city.Name = row["Name"].ToString();
                    city.State = int.Parse(row["State"].ToString());

                    cities.Add(city);
                }
            }

            return cities;
        }
    }
}