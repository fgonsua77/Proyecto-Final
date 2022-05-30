package nando.proyect.entornoServidor.model;

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
    private Date paymentdate;
    private Date shipmentdate;
    private Date confirmationdate;
    private Date arrivaldate;
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
    public Date getArrivaldate() {
        return arrivaldate;
    }
    public void setArrivaldate(Date arrivaldate) {
        this.arrivaldate = arrivaldate;
    }
    @Override
    public String toString() {
        return "Compra [arrivaldate=" + arrivaldate + ", confirmationdate=" + confirmationdate + ", direccion="
                + direccion + ", id=" + id + ", paymentdate=" + paymentdate + ", shipmentbill=" + shipmentbill
                + ", shipmentdate=" + shipmentdate + "]";
    }
    
    
    
    
    
    
    
}
