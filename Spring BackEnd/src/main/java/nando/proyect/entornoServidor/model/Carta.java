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
@Table(name = "cartas")
public class Carta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;
    @Column(unique=true)
    public String codigo;
    public String nombre;
    public String texto;
    public String keywords;
    public Boolean reprint;
    public Double precio;
    @ManyToOne
    @JoinColumn(name="expansion")
    public Expansion expansion;
    public String imagen;
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
    public String getTexto() {
        return texto;
    }
    public void setTexto(String texto) {
        this.texto = texto;
    }
    public String getKeywords() {
        return keywords;
    }
    public void setKeywords(String keywords) {
        this.keywords = keywords;
    }
    public Boolean getReprint() {
        return reprint;
    }
    public void setReprint(Boolean reprint) {
        this.reprint = reprint;
    }
    public Double getPrecio() {
        return precio;
    }
    public void setPrecio(Double precio) {
        this.precio = precio;
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
    @Override
    public String toString() {
        return "Carta [codigo=" + codigo + ", expansion=" + expansion + ", id=" + id + ", keywords=" + keywords
                + ", nombre=" + nombre + ", precio=" + precio + ", reprint=" + reprint + ", texto=" + texto + "]";
    }
    
    
    
    
}
