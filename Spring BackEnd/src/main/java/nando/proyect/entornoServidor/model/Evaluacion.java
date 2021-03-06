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
@Table(name="evaluations")
public class Evaluacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;
    private String comment;
    private String general;
    private String article;
    private String packing;
    
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name="idpurchase", referencedColumnName="id")
    private Venta venta;

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    
    public String getGeneral() {
        return general;
    }
    public void setGeneral(String general) {
        this.general = general;
    }
    public String getComment() {
        return comment;
    }
    public void setComment(String comment) {
        this.comment = comment;
    }
    public String getArticle() {
        return article;
    }
    public void setArticle(String article) {
        this.article = article;
    }
    public String getPacking() {
        return packing;
    }
    public void setPacking(String packing) {
        this.packing = packing;
    }
    public Venta getVenta() {
        return venta;
    }
    public void setVenta(Venta venta) {
        this.venta = venta;
    }
    @Override
    public String toString() {
        return "Evaluacion [article=" + article + ", comment=" + comment + ", general=" + general + ", id=" + id
                + ", packing=" + packing + ", venta=" + venta + "]";
    }
    
    

    
}
