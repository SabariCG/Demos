package models

type Server struct {
	Id           string        `json:"id"`
	Certificates []Certificate `json:"certificates"`
}
