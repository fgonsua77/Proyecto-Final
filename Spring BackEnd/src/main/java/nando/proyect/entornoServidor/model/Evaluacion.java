package nando.proyect.entornoServidor.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="evaluations")
public class Evaluacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;
    private String comment;
    @Enumerated(EnumType.STRING)
    private General general;
    @Enumerated(EnumType.STRING)
    private Articulo article;
    @Enumerated(EnumType.STRING)
    private Empaquetado packing;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="idpurchase", referencedColumnName="id")
    private Compra compra;

    public enum Empaquetado {
        EXCELLENT, GREAT, GOOD, BAD;
    }
    public enum General {
        EXCELLENT, GREAT, GOOD, BAD;
    }
    public enum Articulo {
        EXCELLENT, GREAT, GOOD, BAD;
    }
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    
    public General getGeneral() {
        return general;
    }
    public void setGeneral(General general) {
        this.general = general;
    }
    public Compra getCompra() {
        return compra;
    }
    public void setCompra(Compra compra) {
        this.compra = compra;
    }
    public String getComment() {
        return comment;
    }
    public void setComment(String comment) {
        this.comment = comment;
    }
    public Articulo getArticle() {
        return article;
    }
    public void setArticle(Articulo article) {
        this.article = article;
    }
    public Empaquetado getPacking() {
        return packing;
    }
    public void setPacking(Empaquetado packing) {
        this.packing = packing;
    }
    @Override
    public String toString() {
        return "Evaluacion [article=" + article + ", comment=" + comment + ", compra=" + compra + ", general=" + general
                + ", id=" + id + ", packing=" + packing + "]";
    }
    

    
}
