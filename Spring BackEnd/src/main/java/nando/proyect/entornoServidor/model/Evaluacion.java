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
    private String comentario;
    @Enumerated(EnumType.STRING)
    private General general;
    @Enumerated(EnumType.STRING)
    private Articulo articulo;
    @Enumerated(EnumType.STRING)
    private Empaquetado empaquetado;
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
    public String getComentario() {
        return comentario;
    }
    public void setComentario(String comentario) {
        this.comentario = comentario;
    }
    
    public General getGeneral() {
        return general;
    }
    public void setGeneral(General general) {
        this.general = general;
    }
    public Articulo getArticulo() {
        return articulo;
    }
    public void setArticulo(Articulo articulo) {
        this.articulo = articulo;
    }
    public Empaquetado getEmpaquetado() {
        return empaquetado;
    }
    public void setEmpaquetado(Empaquetado empaquetado) {
        this.empaquetado = empaquetado;
    }
    public Compra getCompra() {
        return compra;
    }
    public void setCompra(Compra compra) {
        this.compra = compra;
    }
    @Override
    public String toString() {
        return "Evaluacion [articulo=" + articulo + ", comentario=" + comentario + ", compra=" + compra
                + ", empaquetado=" + empaquetado + ", general=" + general + ", id=" + id + "]";
    }

    
}
