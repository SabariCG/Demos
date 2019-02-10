using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DemoWebApp.Controllers
{
    public class PersonController : ApiController
    {
        DAL.TimeZone timeZoneDb = new DAL.TimeZone();
        DAL.Country countryDb = new DAL.Country();
        DAL.State stateDb = new DAL.State();
        DAL.City cityDb = new DAL.City();
        DAL.PersonDetail personDetailDb = new DAL.PersonDetail();

        [Route("api/person/timezones")]
        [HttpGet]
        public IEnumerable<Models.TimeZone> GetTimeZones()
        {
            return timeZoneDb.GetTimeZones();
        }

        [Route("api/person/countries")]
        [HttpGet]
        public IEnumerable<Models.Country> GetCountries()
        {
            return countryDb.GetCountries();
        }

        [Route("api/person/states")]
        [HttpGet]
        public IEnumerable<Models.State> GetStates()
        {
            return stateDb.GetStates();
        }

        [Route("api/person/cities")]
        public IEnumerable<Models.City> GetCities()
        {
            return cityDb.GetCities();
        }

        [Route("api/person/details")]
        [HttpPost]
        public IEnumerable<Models.PersonDetail> GetPersons(Models.PersonDetail personDetail)
        {
            return personDetailDb.GetPersonDetails(int.Parse(personDetail.TimeZone), int.Parse(personDetail.Country), int.Parse(personDetail.State), int.Parse(personDetail.City));
        }
    }
}
