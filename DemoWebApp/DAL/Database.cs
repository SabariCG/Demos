using System;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace DemoWebApp.DAL
{
    public class Database
    {
        public static string connectionString = ConfigurationManager.ConnectionStrings["DemoDatabaseConnection"].ConnectionString;

        public DataTable GetDataTable(string query)
        {
            DataTable dt = new DataTable();

            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                using (SqlCommand cmd = new SqlCommand(query, conn))
                {
                    conn.Open();

                    cmd.CommandType = CommandType.Text;

                    using (SqlDataAdapter sda = new SqlDataAdapter(cmd))
                    {
                        sda.Fill(dt);
                    }
                }
            }

            return dt;
        }
    }
}