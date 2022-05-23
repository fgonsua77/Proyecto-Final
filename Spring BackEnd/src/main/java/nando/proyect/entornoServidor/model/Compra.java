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
    private Date paymentdate;
    private Date shipmentdate;
    private Date confirmationdate;
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
    public Date getPaymentdate() {
        return paymentdate;
    }
    public void setPaymentdate(Date paymentdate) {
        this.paymentdate = paymentdate;
    }
    public Date getShipmentdate() {
        return shipmentdate;
    }
    public void setShipmentdate(Date shipmentdate) {
        this.shipmentdate = shipmentdate;
    }
    public Date getConfirmationdate() {
        return confirmationdate;
    }
    public void setConfirmationdate(Date confirmationdate) {
        this.confirmationdate = confirmationdate;
    }
    public Integer getShipmentbill() {
        return shipmentbill;
    }
    public void setShipmentbill(Integer shipmentbill) {
        this.shipmentbill = shipmentbill;
    }
    @Override
    public String toString() {
        return "Compra [confirmationdate=" + confirmationdate + ", direccion=" + direccion.getName() + ", evaluacion="
                + evaluacion.getGeneral() + ", id=" + id + ", paymentdate=" + paymentdate + ", shipmentbill=" + shipmentbill
                + ", shipmentdate=" + shipmentdate + "]";
    }
    
    
    
    
}
