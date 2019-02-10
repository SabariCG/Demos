CREATE DATABASE DemoDatabase;
GO

--SELECT * FROM sys.time_zone_info;

USE DemoDatabase;
GO

CREATE TABLE TimeZones(
Id INT IDENTITY(1, 1) NOT NULL,
[Name] VARCHAR(200) NOT NULL,
UtcOffSet VARCHAR(10) NOT NULL);
GO

ALTER TABLE TimeZones ADD CONSTRAINT PK_TimeZones_Id PRIMARY KEY(Id);
GO

INSERT INTO TimeZones([Name], UtcOffSet)
SELECT [name], current_utc_offset FROM sys.time_zone_info;

SELECT * FROM TimeZones where Name like '%US%';

SELECT * FROM TimeZones where Id=106;

CREATE TABLE Countries(
Id INT IDENTITY(1, 1) NOT NULL,
[Name] VARCHAR(100) NOT NULL,
CountryCode VARCHAR(10),
TimeZone INT NOT NULL);
GO

ALTER TABLE Countries ADD CONSTRAINT PK_Countries_Id PRIMARY KEY(Id);
GO

ALTER TABLE Countries ADD CONSTRAINT FK_Countries_TimeZones FOREIGN KEY (TimeZone) REFERENCES TimeZones(Id);
GO

--DROP TABLE Countries;

--TRUNCATE TABLE Countries;

INSERT INTO Countries([Name], CountryCode, TimeZone) VALUES('India', 'IN', 90);
INSERT INTO Countries([Name], CountryCode, TimeZone) VALUES('Sri Lanka', 'LK', 90);

INSERT INTO Countries([Name], CountryCode, TimeZone) VALUES('Mexico', 'MX', 11);

INSERT INTO Countries([Name], CountryCode, TimeZone) VALUES('United States', 'US', 24);

INSERT INTO Countries([Name], CountryCode, TimeZone) VALUES('Belgium', 'BE', 48);
INSERT INTO Countries([Name], CountryCode, TimeZone) VALUES('Canada', 'CA', 48);
INSERT INTO Countries([Name], CountryCode, TimeZone) VALUES('United Kindom', 'UK', 48);

INSERT INTO Countries([Name], CountryCode, TimeZone) VALUES('Australia', 'AUS', 106);
INSERT INTO Countries([Name], CountryCode, TimeZone) VALUES('Australia', 'AUS', 115);
INSERT INTO Countries([Name], CountryCode, TimeZone) VALUES('Australia', 'AUS', 117);


SELECT * FROM Countries;

CREATE TABLE States(
Id INT IDENTITY NOT NULL,
[Name] VARCHAR(100) NOT NULL,
Country INT NOT NULL,
CONSTRAINT PK_States_Id_Name PRIMARY KEY(Id),
CONSTRAINT FK_States_Countries FOREIGN KEY(Country) REFERENCES Countries(Id)
);
GO

INSERT INTO States([Name], Country) VALUES('Tamilnadu', 1);
INSERT INTO States([Name], Country) VALUES('Kerala', 1);
INSERT INTO States([Name], Country) VALUES('Karnataka', 1);
INSERT INTO States([Name], Country) VALUES('Andhra Pradesh', 1);

INSERT INTO States([Name], Country) VALUES('California', 4);
INSERT INTO States([Name], Country) VALUES('Florida', 4);
INSERT INTO States([Name], Country) VALUES('Texas', 4);
INSERT INTO States([Name], Country) VALUES('Washington', 4);

--DROP TABLE States;
--TRUNCATE TABLE States;
SELECT * FROM States;

CREATE TABLE Cities(
Id INT IDENTITY(1, 1) NOT NULL,
[Name] VARCHAR(100) NOT NULL,
[State] INT NOT NULL,
CONSTRAINT PK_Cities_Id_Name PRIMARY KEY(Id),
CONSTRAINT FK_Cities_States FOREIGN KEY([State]) REFERENCES States(Id)
);
GO

INSERT INTO Cities([Name], [State]) VALUES('Madurai', 1);
INSERT INTO Cities([Name], [State]) VALUES('Dindigul', 1);
INSERT INTO Cities([Name], [State]) VALUES('Chennai', 1);
INSERT INTO Cities([Name], [State]) VALUES('Trichy', 1);
INSERT INTO Cities([Name], [State]) VALUES('Salem', 1);
INSERT INTO Cities([Name], [State]) VALUES('Trivandrum', 2);
INSERT INTO Cities([Name], [State]) VALUES('Kochi', 2);
INSERT INTO Cities([Name], [State]) VALUES('Trichur', 2);
INSERT INTO Cities([Name], [State]) VALUES('Ernakulam', 2);
INSERT INTO Cities([Name], [State]) VALUES('Palakadu', 2);
INSERT INTO Cities([Name], [State]) VALUES('Bangalore', 3);
INSERT INTO Cities([Name], [State]) VALUES('Mysore', 3);
INSERT INTO Cities([Name], [State]) VALUES('Mangalore', 3);
INSERT INTO Cities([Name], [State]) VALUES('Hubli', 3);
INSERT INTO Cities([Name], [State]) VALUES('Visagapatnam', 4);
INSERT INTO Cities([Name], [State]) VALUES('Tirupati', 4);
INSERT INTO Cities([Name], [State]) VALUES('Vijayawada', 4);
INSERT INTO Cities([Name], [State]) VALUES('Guntur', 4);
INSERT INTO Cities([Name], [State]) VALUES('San Francisco', 5);
INSERT INTO Cities([Name], [State]) VALUES('Los Angeles', 5);
INSERT INTO Cities([Name], [State]) VALUES('San Diego', 5);
INSERT INTO Cities([Name], [State]) VALUES('Fresno', 5);
INSERT INTO Cities([Name], [State]) VALUES('Miami', 6);
INSERT INTO Cities([Name], [State]) VALUES('Orlando', 6);
INSERT INTO Cities([Name], [State]) VALUES('Waco', 7);
INSERT INTO Cities([Name], [State]) VALUES('Houston', 7);
INSERT INTO Cities([Name], [State]) VALUES('Olymbia', 8);
INSERT INTO Cities([Name], [State]) VALUES('Seattle', 8);

CREATE TABLE PersonDetails(
Id INT IDENTITY(1, 1) NOT NULL,
[Name] VARCHAR(100) NOT NULL,
Gender VARCHAR(10) NOT NULL,
Age INT NULL,
TimeZone INT NULL,
Country INT NULL,
[State] INT NULL,
City INT NULL,
CONSTRAINT PK_PersonDetails_Id PRIMARY KEY(Id)
);
GO

select * from Cities

--DROP TABLE PersonDetails;

SELECT tz.Id AS TimeZone, co.Id AS CountryId, co.[Name] AS CountryName, st.Id AS StateId, st.[Name] AS StateName, ci.Id AS CityId, ci.[Name] AS CityName FROM TimeZones tz
INNER JOIN Countries co ON co.TimeZone = tz.Id
INNER JOIN States st ON st.Country = co.Id
INNER JOIN Cities ci ON ci.[State] = st.Id

INSERT INTO PersonDetails([Name], Gender, Age, TimeZone, Country, [State], City) VALUES('Sabari', 'Male', 28, 90, 1, 1, 1);
INSERT INTO PersonDetails([Name], Gender, Age, TimeZone, Country, [State], City) VALUES('Suresh', 'Male', 28, 90, 1, 1, 1);
INSERT INTO PersonDetails([Name], Gender, Age, TimeZone, Country, [State], City) VALUES('Venkatesh', 'Male', 29, 90, 1, 1, 1);
INSERT INTO PersonDetails([Name], Gender, Age, TimeZone, Country, [State], City) VALUES('Anand', 'Male', 28, 90, 1, 1, 1);

INSERT INTO PersonDetails([Name], Gender, Age, TimeZone, Country, [State], City) VALUES('Karthick', 'Male', 28, 90, 1, 1, 2);
INSERT INTO PersonDetails([Name], Gender, Age, TimeZone, Country, [State], City) VALUES('Mukesh', 'Male', 28, 90, 1, 1, 2);
INSERT INTO PersonDetails([Name], Gender, Age, TimeZone, Country, [State], City) VALUES('Eswaran', 'Male', 28, 90, 1, 1, 2);
INSERT INTO PersonDetails([Name], Gender, Age, TimeZone, Country, [State], City) VALUES('Prakash', 'Male', 26, 90, 1, 1, 2);

INSERT INTO PersonDetails([Name], Gender, Age, TimeZone, Country, [State], City) VALUES('Karthick', 'Male', 28, 90, 1, 1, 3);
INSERT INTO PersonDetails([Name], Gender, Age, TimeZone, Country, [State], City) VALUES('Sabari', 'Male', 28, 90, 1, 1, 3);
INSERT INTO PersonDetails([Name], Gender, Age, TimeZone, Country, [State], City) VALUES('Venkatesh', 'Male', 27, 90, 1, 1, 3);

INSERT INTO PersonDetails([Name], Gender, Age, TimeZone, Country, [State], City) VALUES('Vijay Gandhi', 'Male', 33, 90, 1, 1, 4);

INSERT INTO PersonDetails([Name], Gender, Age, TimeZone, Country, [State], City) VALUES('Aravind', 'Male', 25, 90, 1, 1, 5);

INSERT INTO PersonDetails([Name], Gender, Age, TimeZone, Country, [State], City) VALUES('Agisha', 'Female', 26, 90, 1, 2, 6);
INSERT INTO PersonDetails([Name], Gender, Age, TimeZone, Country, [State], City) VALUES('Abraham', 'Male', 27, 90, 1, 2, 6);

INSERT INTO PersonDetails([Name], Gender, Age, TimeZone, Country, [State], City) VALUES('Sabari', 'Male', 28, 90, 1, 3, 11);
INSERT INTO PersonDetails([Name], Gender, Age, TimeZone, Country, [State], City) VALUES('Venkatesh', 'Male', 29, 90, 1, 3, 11);
INSERT INTO PersonDetails([Name], Gender, Age, TimeZone, Country, [State], City) VALUES('Arun Kumar', 'Male', 27, 90, 1, 3, 11);
INSERT INTO PersonDetails([Name], Gender, Age, TimeZone, Country, [State], City) VALUES('Lakshmi', 'Female', 25, 90, 1, 3, 12);

INSERT INTO PersonDetails([Name], Gender, Age, TimeZone, Country, [State], City) VALUES('Arjun Konduru', 'Male', 26, 90, 1, 4, 15);
INSERT INTO PersonDetails([Name], Gender, Age, TimeZone, Country, [State], City) VALUES('Harsha', 'Male', 26, 90, 1, 4, 15);

SELECT * FROM PersonDetails where City=1;

SELECT DISTINCT p.[Name], p.Gender, p.Age, tz.[Name] AS TimeZone, co.[Name] AS Country, st.[Name] AS [State], ci.[Name] AS City FROM PersonDetails p
INNER JOIN TimeZones tz ON tz.Id = p.TimeZone
INNER JOIN Countries co ON co.Id = p.Country
INNER JOIN States st ON st.Id = p.[State]
INNER JOIN Cities ci ON ci.Id = p.City
WHERE p.TimeZone = 90 AND p.Country = 1 AND p.[State] = 1 AND p.City = 1

SELECT DISTINCT p.[Name], p.Gender, p.Age, tz.[Name] AS TimeZone, co.[Name] AS Country, st.[Name] AS [State], ci.[Name] AS City FROM PersonDetails p
INNER JOIN TimeZones tz ON tz.Id = p.TimeZone
INNER JOIN Countries co ON co.Id = p.Country
INNER JOIN States st ON st.Id = p.[State]
INNER JOIN Cities ci ON ci.Id = p.City
