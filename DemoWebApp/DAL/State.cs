using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;

namespace DemoWebApp.DAL
{
    public class State
    {
        public static string connectionString = ConfigurationManager.ConnectionStrings["DemoDatabaseConnection"].ConnectionString;

        Database db = new Database();
        public IEnumerable<Models.State> GetStates()
        {
            DataTable stateDt = db.GetDataTable("SELECT * FROM States");

            return _GetStates(stateDt);
        }

        private IEnumerable<Models.State> _GetStates(DataTable stateDt)
        {
            List<Models.State> states = new List<Models.State>();

            if (stateDt != null && stateDt.Rows.Count > 0)
            {
                foreach (DataRow row in stateDt.Rows)
                {
                    Models.State state = new Models.State();

                    state.Id = int.Parse(row["Id"].ToString());
                    state.Name = row["Name"].ToString();
                    state.Country = int.Parse(row["Country"].ToString());

                    states.Add(state);
                }
            }

            return states;
        }
    }
}