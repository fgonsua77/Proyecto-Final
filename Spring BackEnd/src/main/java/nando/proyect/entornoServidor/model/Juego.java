package nando.proyect.entornoServidor.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.CascadeType;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="juegos")
public class Juego{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;
    public String nombre;
    public String compania;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="distribuidoraNA", referencedColumnName="id")
    public Distribuidora distribuidoraNA;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="distribuidoraEU", referencedColumnName="id")
    public Distribuidora distribuidoraEU;
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
    public String getcompania() {
        return compania;
    }
    public void setcompania(String compania) {
        this.compania = compania;
    }
    public Distribuidora getDistribuidoraNA() {
        return distribuidoraNA;
    }
    public void setDistribuidoraNA(Distribuidora distribuidoraNA) {
        this.distribuidoraNA = distribuidoraNA;
    }
    public Distribuidora getDistribuidoraEU() {
        return distribuidoraEU;
    }
    public void setDistribuidoraEU(Distribuidora distribuidoraEU) {
        this.distribuidoraEU = distribuidoraEU;
    }
    @Override
    public String toString() {
        return "juego [compania=" + compania + ", distribuidoraEU=" + distribuidoraEU.getNombre() + ", distribuidoraNA="
                + distribuidoraNA.getNombre() + ", id=" + id + ", nombre=" + nombre + "]";
    }
    
}