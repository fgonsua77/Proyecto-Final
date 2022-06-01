package nando.proyect.entornoServidor.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="idseller", referencedColumnName="id")
    private Usuarios vendedor;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="idcard", referencedColumnName="id")
    private Carta carta;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="idpurchase", referencedColumnName="id")
    private Compra compra;
    private Integer price;
    private String state;
    private String comments;
    private String language;
    private Integer amount;
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
    
    public Compra getCompra() {
        return compra;
    }
    public void setCompra(Compra compra) {
        this.compra = compra;
    }
    @Override
    public String toString() {
        return "Venta [amount=" + amount + ", carta=" + carta + ", comments=" + comments + ", compra=" + compra
                + ", id=" + id + ", language=" + language + ", price=" + price + ", state=" + state + ", vendedor="
                + vendedor + "]";
    }
    
    
}
