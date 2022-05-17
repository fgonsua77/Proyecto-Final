package nando.proyect.entornoServidor.model;

import java.util.Collection;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="purchases")
public class Compra {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="idaddress", referencedColumnName="id")
    public Direccion direccion;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="evaluation", referencedColumnName="id")
    public Evaluacion evaluacion;
    private Date fechadepago;
    private Date fechadeenvio;
    private Date fechadeconfirmación;
    private Integer shipmentbill;
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public Direccion getDireccion() {
        return direccion;
    }
    public void setDireccion(Direccion direccion) {
        this.direccion = direccion;
    }
    public Evaluacion getEvaluacion() {
        return evaluacion;
    }
    public void setEvaluacion(Evaluacion evaluacion) {
        this.evaluacion = evaluacion;
    }
    public Date getFechadepago() {
        return fechadepago;
    }
    public void setFechadepago(Date fechadepago) {
        this.fechadepago = fechadepago;
    }
    public Date getFechadeenvio() {
        return fechadeenvio;
    }
    public void setFechadeenvio(Date fechadeenvio) {
        this.fechadeenvio = fechadeenvio;
    }
    public Date getFechadeconfirmación() {
        return fechadeconfirmación;
    }
    public void setFechadeconfirmación(Date fechadeconfirmación) {
        this.fechadeconfirmación = fechadeconfirmación;
    }
    public Integer getShipmentbill() {
        return shipmentbill;
    }
    public void setShipmentbill(Integer shipmentbill) {
        this.shipmentbill = shipmentbill;
    }
    @Override
    public String toString() {
        return "Compra [direccion=" + direccion + ", evaluacion=" + evaluacion + ", fechadeconfirmación="
                + fechadeconfirmación + ", fechadeenvio=" + fechadeenvio + ", fechadepago=" + fechadepago + ", id=" + id
                + ", shipmentbill=" + shipmentbill + "]";
    }
    
    
    
}
