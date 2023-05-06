use patientsdb;

CREATE TABLE if not exists Users (
	Uid int NOT NULL,
	Username varchar(255) NOT NULL,
	City varchar(255) NOT NULL,
	Friend int,
	PRIMARY KEY (Uid),
	FOREIGN KEY (Friend) REFERENCES Users(Uid)
);