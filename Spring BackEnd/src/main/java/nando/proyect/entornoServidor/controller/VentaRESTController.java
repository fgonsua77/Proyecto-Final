package nando.proyect.entornoServidor.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
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
    public Venta showSale(@PathVariable("id") Integer idSale) {
        return ventaService.encontrarUnaVentaPorId(idSale);
    }
    @GetMapping("/ventas/carta/cardId={id}")
    public List<Venta> encontrarVentasPorCarta(@PathVariable("id") Integer idCarta) {
        List<Venta> ventas = ventaService.encontrarTodas();
        List<Venta> ventasSinComprar = new ArrayList<Venta>();
        for(int i = 0; i<ventas.size(); i++) {
            if(ventas.get(i).getCompra() == null && ventas.get(i).getCarta().getId() == idCarta) {
                ventasSinComprar.add(ventas.get(i));
            }
        }
        return ventasSinComprar;
    }
    @GetMapping("/ventas/preciomenor/cardId={id}")
    public Venta encontrarLaVentaMenorPorCarta(@PathVariable("id") Integer idCarta) {
        Sort sort = Sort.by("price").ascending();
        List<Venta> ventas = ventaService.encontrarTodasFiltradas(sort);
        System.out.println(ventas);
        System.out.println(ventas.get(0).getCarta());
        List<Venta> ventasSinComprar = new ArrayList<Venta>();
        for(int i = 0; i<ventas.size(); i++) {
            if(ventas.get(i).getCompra() == null && ventas.get(i).getCarta().getId().equals(idCarta)) {
                ventasSinComprar.add(ventas.get(i));
            }
        }
        Venta ventaMenor = ventasSinComprar.get(0);
        if(ventaMenor != null) {
            return ventaMenor;
        }else{
            return null;
        }
    }
    @GetMapping("/ventas/total/cardId={id}")
    public  Integer encontrarTotalVentasPorCarta(@PathVariable("id") Integer idCarta) {
        List<Venta> ventas = ventaService.encontrarTodas();
        List<Venta> ventasSinComprar = new ArrayList<Venta>();
        for(int i = 0; i<ventas.size(); i++) {
            if(ventas.get(i).getCompra() == null && ventas.get(i).getCarta().getId().equals(idCarta)) {
                ventasSinComprar.add(ventas.get(i));
            }
        }
        Integer total = 0;
        for(int i = 0; i<ventasSinComprar.size(); i++) {
            total += ventasSinComprar.get(i).getAmount();
        }
        if(total != null){
            return total;
        }else{
            return null;
        }
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