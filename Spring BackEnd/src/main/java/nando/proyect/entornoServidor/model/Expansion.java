package nando.proyect.entornoServidor.model;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "expansions")
public class Expansion{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;
    @Column(unique=true)
    public String code;
    public String name;
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name="idGame")
    public Juego juego;
    public String image;
    @JsonFormat(pattern="dd-MM-yyyy")
    public Date releasedate;
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    
    public Juego getJuego() {
        return juego;
    }
    public void setJuego(Juego juego) {
        this.juego = juego;
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
    public String getImage() {
        return image;
    }
    public void setImage(String image) {
        this.image = image;
    }
    
    public Date getReleasedate() {
        return releasedate;
    }
    public void setReleasedate(Date releasedate) {
        this.releasedate = releasedate;
    }
    @Override
    public String toString() {
        return "Expansion [code=" + code + ", id=" + id + ", image=" + image + ", juego=" + juego + ", name=" + name
                + ", releasedate=" + releasedate + "]";
    }
    
    
    
    
}