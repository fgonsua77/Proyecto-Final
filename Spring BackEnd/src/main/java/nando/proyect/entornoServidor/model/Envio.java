package nando.proyect.entornoServidor.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "shipments")
public class Envio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;
    public Double price;
    public String name;
    public Boolean certified;
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public Double getPrice() {
        return price;
    }
    public void setPrice(Double price) {
        this.price = price;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Boolean getCertified() {
        return certified;
    }
    public void setCertified(Boolean certified) {
        this.certified = certified;
    }
    @Override
    public String toString() {
        return "Envio [certified=" + certified + ", id=" + id + ", name=" + name + ", price=" + price + "]";
    }
   
    
    
    
    
    
    
}
