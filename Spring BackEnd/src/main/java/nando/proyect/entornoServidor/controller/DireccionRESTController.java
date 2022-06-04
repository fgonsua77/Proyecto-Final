package nando.proyect.entornoServidor.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import nando.proyect.entornoServidor.model.Direccion;
import nando.proyect.entornoServidor.service.IServiceDireccion;
import nando.proyect.entornoServidor.service.IServiceUsuario;

@RestController
@RequestMapping("/address")
public class DireccionRESTController {
    @Autowired
    private IServiceUsuario serviceUsuario;
    @Autowired
    private IServiceDireccion direccionService;

    @GetMapping("/addresses")
    public List<Direccion> encontrarTodas() {
        return direccionService.encontrarTodas();
    }
    @GetMapping("/idAddress={id}")
    public Direccion encontrarUnaDireccionPorId(@PathVariable("id") Integer id) {
        return direccionService.encontrarUnaDireccionPorId(id);
    }
    @GetMapping("/addresses/userId={id}")
    public List<Direccion> encontrarDireccionesPorUsuario(@PathVariable("id") Integer idUser) {
        List<Direccion> direcciones = direccionService.encontrarTodas();
        List<Direccion> direccionesPorUsuario = new ArrayList<>();
        for (Direccion direccion : direcciones) {
            if (direccion.getUsuario().getId() == idUser) {
                direccionesPorUsuario.add(direccion);
            }
        }
        return direccionesPorUsuario;
     }
    @PostMapping("/save")
    public void guardarDireccion(@RequestBody Direccion direccion) {
        direccionService.guardarDireccion(direccion);
    }
    @PostMapping
    ("/saveAddress/idUser={id}&addressname={addressname}&name={name}&surname={surname}&street={street}&floor={floor}&number={number}&postalcode={postalcode}&city={city}&province={province}&country={country}&comments={comments}&preferred={preferred}")
    public void guardarDireccionConParametros(
        @PathVariable("id") Integer idUser,
        @PathVariable("addressname") String addressname,
        @PathVariable("name") String name,
        @PathVariable("surname") String surname,
        @PathVariable("street") String street,
        @PathVariable("floor") String floor,
        @PathVariable("number") String number,
        @PathVariable("postalcode") String postalcode,
        @PathVariable("city") String city,
        @PathVariable("province") String province,
        @PathVariable("country") String country,
        @PathVariable("comments") String comments,
        @PathVariable("preferred") Boolean preferred) {
        Direccion direccion = new Direccion();
        direccion.setAddressname(addressname);
        direccion.setName(name);
        direccion.setSurname(surname);
        direccion.setStreet(street);
        direccion.setFloor(floor);
        direccion.setNumber(number);
        direccion.setPostalcode(postalcode);
        direccion.setCity(city);
        direccion.setProvince(province);
        direccion.setCountry(country);
        direccion.setComments(comments);
        direccion.setPreferred(preferred);
        direccion.setUsuario(serviceUsuario.encontrarUsuarioPorId(idUser));
        direccionService.guardarDireccion(direccion);
    }
    @PutMapping("/update")
    public void actualizarDireccion(@RequestBody Direccion direccion) {
        Direccion direccionAActualizar = direccionService.encontrarUnaDireccionPorId(direccion.getId());
        direccionAActualizar.setStreet(direccion.getStreet());
        direccionAActualizar.setNumber(direccion.getNumber());
        direccionAActualizar.setFloor(direccion.getFloor());
        direccionAActualizar.setProvince(direccion.getProvince());
        direccionAActualizar.setPostalcode(direccion.getPostalcode());
        direccionAActualizar.setCountry(direccion.getCountry());
        direccionAActualizar.setComments(direccion.getComments());
        direccionAActualizar.setPreferred(direccion.getPreferred());
        direccionAActualizar.setSurname(direccion.getSurname());
        direccionAActualizar.setName(direccion.getName());
        direccionAActualizar.setCity(direccion.getCity());
        direccionService.guardarDireccion(direccionAActualizar);
    }
    @DeleteMapping("/delete")
    public void borrarDireccion(@RequestBody Direccion direccion) {
        direccionService.borrarDireccion(direccion);
    }
}
