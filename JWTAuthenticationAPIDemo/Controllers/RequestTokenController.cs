using System.Net;
using System.Net.Http;
using System.Web.Http;

using JWTAuthenticationAPIDemo.Auth;

namespace JWTAuthenticationAPIDemo.Controllers
{
    public class RequestTokenController : ApiController
    {
        public HttpResponseMessage Get(string userName, string password)
        {
            if(CheckUser(userName, password))
            {
                return Request.CreateResponse(HttpStatusCode.OK, JwtAuthManager.GenerateJWTToken(userName));
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.Unauthorized, "Invalid Request");
            }
        }

        public bool CheckUser(string userName, string password)
        {
            return (userName == "sabari" && password == "abc123");
        }
    }
}
