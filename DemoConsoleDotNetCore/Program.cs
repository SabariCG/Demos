using System;

using Serilog;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

using DotNetCoreConsoleLib;

namespace DemoConsoleDotNetCore
{
    class Program
    {
        static void Main(string[] args)
        {
            Log.Logger = new LoggerConfiguration()
                .WriteTo.RollingFile(@"C:\Share\Test\ConsoleLogging.log")
                .CreateLogger();

            var serviceCollection = new ServiceCollection();
            ConfigureServices(serviceCollection);

            var serviceProvider = serviceCollection.BuildServiceProvider();

            var logger = serviceProvider.GetService<ILogger<Program>>();

            try
            {
                logger.LogInformation("Starting...");

                serviceProvider.GetService<FileRetension>().Process(@"C:\Share\Test", 7);

                logger.LogInformation("Done.");
            }
            catch(Exception ex)
            {
                logger.LogInformation("Error occurred...");
                logger.LogError(ex, ex.Message);
                logger.LogInformation(ex.Message);
            }
        }

        static void ConfigureServices(IServiceCollection serviceCollection)
        {
            serviceCollection.AddLogging(configure => configure.AddSerilog())
                .AddTransient<FileRetension>();
        }
    }
}
