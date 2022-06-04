package nando.proyect.entornoServidor.model;
import javax.persistence.CascadeType;
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
    public String code;
    public String name;
    public Boolean reprint;
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name="expansion")
    public Expansion expansion;
    public String image;
    public String rarity;
    public Boolean highlighted;
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getCode() {
        return code;
    }
    public void setCode(String code) {
        this.code = code;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
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
    
    public String getImage() {
        return image;
    }
    public void setImage(String image) {
        this.image = image;
    }
    
    public Boolean getReprint() {
        return reprint;
    }
    public String getRarity() {
        return rarity;
    }
    public void setRarity(String rarity) {
        this.rarity = rarity;
    }
    public Boolean getHighlighted() {
        return highlighted;
    }
    public void setHighlighted(Boolean highlighted) {
        this.highlighted = highlighted;
    }
    @Override
    public String toString() {
        return "Carta [code=" + code + ", highlighted=" + highlighted + ", expansion=" + expansion.getName() + ", id=" + id
                + ", image=" + image + ", name=" + name + ", rarity=" + rarity + ", reprint=" + reprint + "]";
    }
    
    
    
    
    
    
}
