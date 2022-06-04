package nando.proyect.entornoServidor.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="addresses")
public class Direccion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "iduser")
    private Usuarios usuario;
    private String addressname;
    private String name;
    private String surname;
    private String street;
    private String number;
    private String floor;
    private String postalcode;
    private String city;
    private String province;
    private String country;
    private String comments;
    private Boolean preferred;
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public Usuarios getUsuario() {
        return usuario;
    }
    public void setUsuario(Usuarios usuario) {
        this.usuario = usuario;
    }
    public String getAddressname() {
        return addressname;
    }
    public void setAddressname(String addressname) {
        this.addressname = addressname;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getSurname() {
        return surname;
    }
    public void setSurname(String surname) {
        this.surname = surname;
    }
    public String getStreet() {
        return street;
    }
    public void setStreet(String street) {
        this.street = street;
    }
    public String getNumber() {
        return number;
    }
    public void setNumber(String number) {
        this.number = number;
    }
    public String getFloor() {
        return floor;
    }
    public void setFloor(String floor) {
        this.floor = floor;
    }
    public String getPostalcode() {
        return postalcode;
    }
    public void setPostalcode(String postalcode) {
        this.postalcode = postalcode;
    }
    public String getCity() {
        return city;
    }
    public void setCity(String city) {
        this.city = city;
    }
    public String getProvince() {
        return province;
    }
    public void setProvince(String province) {
        this.province = province;
    }
    public String getCountry() {
        return country;
    }
    public void setCountry(String country) {
        this.country = country;
    }
    public String getComments() {
        return comments;
    }
    public void setComments(String comments) {
        this.comments = comments;
    }
    public Boolean getPreferred() {
        return preferred;
    }
    public void setPreferred(Boolean preferred) {
        this.preferred = preferred;
    }
    @Override
    public String toString() {
        return "Direccion [addressname=" + addressname + ", city=" + city + ", comments=" + comments + ", country="
                + country + ", floor=" + floor + ", id=" + id + ", name=" + name + ", number=" + number
                + ", postalcode=" + postalcode + ", preferred=" + preferred + ", province=" + province + ", street="
                + street + ", surname=" + surname + ", usuario=" + usuario + "]";
    }
    

    
    
}
