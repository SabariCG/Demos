using System;
using System.IO;
using System.Linq;

using Microsoft.Extensions.Logging;

namespace DotNetCoreConsoleLib
{
    public class FileRetension
    {
        private readonly ILogger<FileRetension> _logger;

        public FileRetension(ILogger<FileRetension> logger)
        {
            _logger = logger;
        }

        public void Process(string folderPath, int retensionPeriodInDays)
        {
            if(!Directory.Exists(folderPath))
            {
                _logger.LogInformation($"{folderPath} is not found.");
            }
            else
            {
                DirectoryInfo directoryInfo = new DirectoryInfo(folderPath);

                foreach(DirectoryInfo dirInfo in directoryInfo.GetDirectories())
                {
                    _logger.LogInformation($"Checking {dirInfo.Name} folder...");

                    DeleteFiles(dirInfo, retensionPeriodInDays);
                }

                _logger.LogInformation($"Checking {directoryInfo.Name} folder...");

                DeleteFiles(directoryInfo, retensionPeriodInDays);
            }
        }

        private void DeleteFiles(DirectoryInfo dirInfo, int retensionPeriodInDays)
        {
            var filteredFiles = Directory.GetFiles(dirInfo.FullName).Where(f => new FileInfo(f).LastWriteTime <= DateTime.Now.AddDays(-(retensionPeriodInDays)));

            if(filteredFiles.Count() > 0)
            {
                _logger.LogInformation($"Deleting {filteredFiles.Count()} files from {dirInfo.FullName} path.");

                foreach(var file in filteredFiles)
                {
                    File.Delete(file);
                }
            }
        }
    }
}
