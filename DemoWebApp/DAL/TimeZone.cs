using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;

namespace DemoWebApp.DAL
{
    public class TimeZone
    {
        public static string connectionString = ConfigurationManager.ConnectionStrings["DemoDatabaseConnection"].ConnectionString;

        Database db = new Database();
        public IEnumerable<Models.TimeZone> GetTimeZones()
        {
            DataTable timeZoneDt = db.GetDataTable("SELECT * FROM TimeZones");

            return _GetTimeZones(timeZoneDt);
        }

        private IEnumerable<Models.TimeZone> _GetTimeZones(DataTable timeZoneDt)
        {
            List<Models.TimeZone> timeZones = new List<Models.TimeZone>();

            if(timeZoneDt != null && timeZoneDt.Rows.Count > 0)
            {
                foreach(DataRow row in timeZoneDt.Rows)
                {
                    Models.TimeZone timeZone = new Models.TimeZone();

                    timeZone.Id = int.Parse(row["Id"].ToString());
                    timeZone.Name = row["Name"].ToString();
                    timeZone.UtcOffSet = row["UtcOffSet"].ToString();

                    timeZones.Add(timeZone);
                }
            }

            return timeZones;
        }
    }
}