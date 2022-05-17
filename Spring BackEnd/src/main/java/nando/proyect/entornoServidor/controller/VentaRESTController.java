package nando.proyect.entornoServidor.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import nando.proyect.entornoServidor.model.Venta;
import nando.proyect.entornoServidor.service.IServiceVenta;

@RestController
@RequestMapping("/sale")
public class VentaRESTController {
    @Autowired
    private IServiceVenta ventaService;
    @GetMapping("/ventas")
    public List<Venta> encontrarTodas() {
        return ventaService.encontrarTodas();
    }

    @GetMapping("/saleId={id}")
    public Venta showSale(@PathVariable Integer idSale) {
        return ventaService.encontrarUnaVentaPorId(idSale);
    }

    @DeleteMapping("/save")
    public void saveSale(@RequestBody Venta venta) {
        ventaService.guardarVenta(venta);
    }

    @Transactional
    @PutMapping("/update")
    public Venta updateSale(@RequestBody Venta venta) {
        Venta ventaActual = ventaService.encontrarUnaVentaPorId(venta.getId());
        ventaActual.setPrice(venta.getPrice());
        ventaActual.setAmount(venta.getAmount());
        ventaActual.setPrice(venta.getPrice());
        ventaActual.setState(venta.getState());
        ventaActual.setLanguage(venta.getLanguage());
        ventaActual.setComments(venta.getComments());
        ventaService.guardarVenta(venta);
        return ventaService.encontrarUnaVentaPorId(venta.getId());
    }

}