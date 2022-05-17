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
    @GetMapping("/addresses/userId={id}")
    public List<Direccion> encontrarDireccionesPorUsuario(@PathVariable Integer idUser) {
        return direccionService.encontrarDireccionesPorUsuario(idUser);
    }
    @PostMapping("/save")
    public void guardarDireccion(@RequestBody Direccion direccion) {
        direccionService.guardarDireccion(direccion);
    }
    @PutMapping("/update")
    public void actualizarDireccion(@RequestBody Direccion direccion) {
        Direccion direccionAActualizar = direccionService.encontrarUnaDireccionPorId(direccion.getId());
        direccionAActualizar.setCalle(direccion.getCalle());
        direccionAActualizar.setNumero(direccion.getNumero());
        direccionAActualizar.setPiso(direccion.getPiso());
        direccionAActualizar.setPuerta(direccion.getPuerta());
        direccionAActualizar.setProvincia(direccion.getProvincia());
        direccionAActualizar.setCodigoPostal(direccion.getCodigoPostal());
        direccionAActualizar.setPais(direccion.getPais());
        direccionAActualizar.setComentarios(direccion.getComentarios());
        direccionAActualizar.setPreferida(direccion.getPreferida());
        direccionAActualizar.setApellidos(direccion.getApellidos());
        direccionAActualizar.setNombre(direccion.getNombre());
        direccionAActualizar.setCiudad(direccion.getCiudad());
        direccionService.guardarDireccion(direccionAActualizar);
    }
    @DeleteMapping("/delete")
    public void borrarDireccion(@RequestBody Direccion direccion) {
        direccionService.borrarDireccion(direccion);
    }
}
