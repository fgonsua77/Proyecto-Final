package nando.proyect.entornoServidor.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "distribuidoras")
public class Distribuidora{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;
    public String nombre;
    public Boolean NA;
    public Boolean EU;
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public Boolean getNA() {
        return NA;
    }
    public void setNA(Boolean nA) {
        NA = nA;
    }
    public Boolean getEU() {
        return EU;
    }
    public void setEU(Boolean eU) {
        EU = eU;
    }
    @Override
    public String toString() {
        return "distribuidora [EU=" + EU + ", NA=" + NA + ", id=" + id + ", nombre=" + nombre + "]";
    }
    

}