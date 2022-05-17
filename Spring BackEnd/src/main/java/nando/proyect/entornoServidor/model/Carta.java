package nando.proyect.entornoServidor.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
@Entity
@Table(name = "cards")
public class Carta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;
    @Column(unique=true)
    public String codigo;
    public String nombre;
    public Boolean reprint;
    @ManyToOne
    @JoinColumn(name="expansion")
    public Expansion expansion;
    public String imagen;
    public String rareza;
    public Boolean destacado;
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getCodigo() {
        return codigo;
    }
    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public void setReprint(Boolean reprint) {
        this.reprint = reprint;
    }
    public Expansion getExpansion() {
        return expansion;
    }
    public void setExpansion(Expansion expansion) {
        this.expansion = expansion;
    }
    
    public String getImagen() {
        return imagen;
    }
    public void setImagen(String imagen) {
        this.imagen = imagen;
    }
    
    public Boolean getReprint() {
        return reprint;
    }
    public String getRareza() {
        return rareza;
    }
    public void setRareza(String rareza) {
        this.rareza = rareza;
    }
    public Boolean getDestacado() {
        return destacado;
    }
    public void setDestacado(Boolean destacado) {
        this.destacado = destacado;
    }
    @Override
    public String toString() {
        return "Carta [codigo=" + codigo + ", destacado=" + destacado + ", expansion=" + expansion + ", id=" + id
                + ", imagen=" + imagen + ", nombre=" + nombre + ", rareza=" + rareza + ", reprint=" + reprint + "]";
    }
    
    
    
    
    
    
}
