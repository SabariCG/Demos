using Microsoft.Owin;
using Microsoft.Owin.Host.SystemWeb;
using Owin;

[assembly: OwinStartup(typeof(OWIN_Demo.Startup))]

namespace OWIN_Demo
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=316888
            app.Run(context => {
                context.Response.ContentType = "text/plain";
                return context.Response.WriteAsync("Hello World!!");
            });
        }
    }
}
