package nando.proyect.entornoServidor.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "sales")
public class Venta {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name="idseller", referencedColumnName="id")
    private Usuarios vendedor;
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name="buyer", referencedColumnName="id")
    private Usuarios comprador;
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name="idcard", referencedColumnName="id")
    private Carta carta;
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name="idevaluation", referencedColumnName="id")
    private Evaluacion evaluacion;
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name="idshipment", referencedColumnName="id")
    private Envio envio;
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name="idaddress", referencedColumnName="id")
    private Direccion direccion;
    private Integer price;
    private String state;
    private String comments;
    private String language;
    private Integer amount;
    private Date paymentdate;
    private Date shipmentdate;
    private Date arrivaldate;
    private Date confirmationdate;
    private String shipmentcode;
    
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public Usuarios getVendedor() {
        return vendedor;
    }
    public void setVendedor(Usuarios vendedor) {
        this.vendedor = vendedor;
    }
    public Carta getCarta() {
        return carta;
    }
    public void setCarta(Carta carta) {
        this.carta = carta;
    }
    public Integer getPrice() {
        return price;
    }
    public void setPrice(Integer price) {
        this.price = price;
    }
    public String getState() {
        return state;
    }
    public void setState(String state) {
        this.state = state;
    }
    public String getComments() {
        return comments;
    }
    public void setComments(String comments) {
        this.comments = comments;
    }
    public String getLanguage() {
        return language;
    }
    public void setLanguage(String language) {
        this.language = language;
    }
    public Integer getAmount() {
        return amount;
    }
    public void setAmount(Integer amount) {
        this.amount = amount;
    }
    public Evaluacion getEvaluacion() {
        return evaluacion;
    }
    public void setEvaluacion(Evaluacion evaluacion) {
        this.evaluacion = evaluacion;
    }
    public Envio getEnvio() {
        return envio;
    }
    public void setEnvio(Envio envio) {
        this.envio = envio;
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
    public Date getArrivaldate() {
        return arrivaldate;
    }
    public void setArrivaldate(Date arrivaldate) {
        this.arrivaldate = arrivaldate;
    }
    public Date getConfirmationdate() {
        return confirmationdate;
    }
    public void setConfirmationdate(Date confirmationdate) {
        this.confirmationdate = confirmationdate;
    }
    public String getShipmentcode() {
        return shipmentcode;
    }
    public void setShipmentcode(String shipmentcode) {
        this.shipmentcode = shipmentcode;
    }
    @Override
    public String toString() {
        return "Venta [amount=" + amount + ", arrivaldate=" + arrivaldate + ", carta=" + carta + ", comments="
                + comments + ", confirmationdate=" + confirmationdate + ", direccion=" + direccion + ", envio=" + envio
                + ", evaluacion=" + evaluacion + ", id=" + id + ", language=" + language + ", paymentdate="
                + paymentdate + ", price=" + price + ", shipmentcode=" + shipmentcode + ", shipmentdate=" + shipmentdate
                + ", state=" + state + ", vendedor=" + vendedor + "]";
    }
    
    
    
    
    
}
