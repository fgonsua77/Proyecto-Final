package nando.proyect.entornoServidor.controller;

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

@RestController
@RequestMapping("/address")
public class DireccionRESTController {
    
    @Autowired
    private IServiceDireccion direccionService;

    @GetMapping("/addresses")
    public List<Direccion> encontrarTodas() {
        return direccionService.encontrarTodas();
    }
    // @GetMapping("/addresses/userId={id}")
    // public List<Direccion> encontrarDireccionesPorUsuario(@PathVariable Integer idUser) {
        
    // }
    @PostMapping("/save")
    public void guardarDireccion(@RequestBody Direccion direccion) {
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
