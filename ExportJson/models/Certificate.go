package models

type Certificate struct {
	Id          string `json:"id"`
	EntityName  string `json:"entityName"`
	SubjectName string `json:"subjectName"`
	Type        string `json:"type"`
	Store       string `json:"store"`
	Hash        string `json:"hash"`
	IssuedBy    string `json:"issuedBy"`
}
