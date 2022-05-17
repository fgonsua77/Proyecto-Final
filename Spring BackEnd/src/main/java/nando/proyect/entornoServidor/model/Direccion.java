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
@Table(name="addresses")
public class Direccion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "iduser")
    private Usuarios usuario;

    private String nombre;
    private String apellidos;
    private String calle;
    private String numero;
    private String piso;
    private String puerta;
    private String codigoPostal;
    private String ciudad;
    private String provincia;
    private String pais;
    private String comentarios;
    private Boolean preferida;
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public Usuarios getUsuario() {
        return usuario;
    }
    public void setUsuario(Usuarios usuario) {
        this.usuario = usuario;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getApellidos() {
        return apellidos;
    }
    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }
    public String getCalle() {
        return calle;
    }
    public void setCalle(String calle) {
        this.calle = calle;
    }
    public String getNumero() {
        return numero;
    }
    public void setNumero(String numero) {
        this.numero = numero;
    }
    public String getPiso() {
        return piso;
    }
    public void setPiso(String piso) {
        this.piso = piso;
    }
    public String getPuerta() {
        return puerta;
    }
    public void setPuerta(String puerta) {
        this.puerta = puerta;
    }
    public String getCodigoPostal() {
        return codigoPostal;
    }
    public void setCodigoPostal(String codigoPostal) {
        this.codigoPostal = codigoPostal;
    }
    public String getCiudad() {
        return ciudad;
    }
    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }
    public String getProvincia() {
        return provincia;
    }
    public void setProvincia(String provincia) {
        this.provincia = provincia;
    }
    public String getPais() {
        return pais;
    }
    public void setPais(String pais) {
        this.pais = pais;
    }
    public String getComentarios() {
        return comentarios;
    }
    public void setComentarios(String comentarios) {
        this.comentarios = comentarios;
    }
    public Boolean getPreferida() {
        return preferida;
    }
    public void setPreferida(Boolean preferida) {
        this.preferida = preferida;
    }
    @Override
    public String toString() {
        return "Direccion [apellidos=" + apellidos + ", calle=" + calle + ", ciudad=" + ciudad + ", codigoPostal="
                + codigoPostal + ", comentarios=" + comentarios + ", id=" + id + ", nombre=" + nombre + ", numero="
                + numero + ", pais=" + pais + ", piso=" + piso + ", preferida=" + preferida + ", provincia=" + provincia
                + ", puerta=" + puerta + ", usuario=" + usuario + "]";
    }
    
}
