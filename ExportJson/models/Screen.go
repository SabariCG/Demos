package models

type Screen struct {
	Deleted       bool   `json:"deleted"`
	ExternalId    string `json:"externalId"`
	Id            string `json:"id"`
	IpAddress     string `json:"ipAddress"`
	IsAtmosServer bool   `json:"isAtmosServer"`
	Mac           string `json:"mac"`
	MachineName   string `json:"machineName"`
	Name          string `json:"name"`
	Password      string `json:"password"`
	ScreenGroup   int32  `json:"screenGroup"`
	UserName      string `json:"userName"`
	Server        Server `json:"server"`
}
