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

    @GetMapping("/ventasSinComprar")
    public List<Venta> encontrarTodasLasVentasSinComprar(){
        List<Venta> ventas = ventaService.encontrarTodas();
        List<Venta> ventasSinComprar = new ArrayList<Venta>();
        for (Venta venta : ventas){
            if(venta.getCompra() == null){
                ventasSinComprar.add(venta);
            }
        }
        return ventasSinComprar;
    }

    @GetMapping("/saleId={id}")
    public Venta showSale(@PathVariable("id") Integer idSale) {
        return ventaService.encontrarUnaVentaPorId(idSale);
    }

    @GetMapping("/ventas/userId={idUser}")
    public List<Venta> showSaleByUser(@PathVariable("idUser") Integer idUser) {
        List<Venta> ventas = ventaService.encontrarTodas();
        List<Venta> ventasFiltradas = new ArrayList<Venta>();
        for (Venta venta : ventas) {
            if ((venta.getVendedor().getId().equals(idUser)) && (venta.getCompra() == null)) {
                ventasFiltradas.add(venta);
            }
        }
        return ventasFiltradas;
    }

    @GetMapping("/ventas/carta/cardId={id}")
    public List<Venta> encontrarVentasPorCarta(@PathVariable("id") Integer idCarta) {
        List<Venta> ventas = ventaService.encontrarTodas();
        List<Venta> ventasSinComprar = new ArrayList<Venta>();
        for (int i = 0; i < ventas.size(); i++) {
            if (ventas.get(i).getCarta().getId() == idCarta) {
                ventasSinComprar.add(ventas.get(i));
            }
        }
        return ventasSinComprar;
    }

    @GetMapping("/ventas/ventasSinComprar/carta/cardId={id}")
    public List<Venta> encontrarVentasSinComprarPorCarta(@PathVariable("id") Integer idCarta) {
        List<Venta> ventas = ventaService.encontrarTodas();
        List<Venta> ventasSinComprar = new ArrayList<Venta>();
        for (int i = 0; i < ventas.size(); i++) {
            if (ventas.get(i).getCompra() == null && ventas.get(i).getCarta().getId() == idCarta) {
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
        for (int i = 0; i < ventas.size(); i++) {
            if (ventas.get(i).getCompra() == null && ventas.get(i).getCarta().getId().equals(idCarta)) {
                ventasSinComprar.add(ventas.get(i));
            }
        }
        Venta ventaMenor = ventasSinComprar.get(0);
        if (ventaMenor != null) {
            return ventaMenor;
        } else {
            return null;
        }
    }

    @GetMapping("/ventas/{compraId}")
    public List<Venta> encontrarVentasPorCompra(@PathVariable("compraId") Integer idCompra) {
        List<Venta> ventas = ventaService.encontrarTodas();
        List<Venta> ventasCompra = new ArrayList<Venta>();
        System.out.println(ventas);
        System.out.println(idCompra);
        for (int i = 0; i < ventas.size(); i++) {
            if ((ventas.get(i).getCompra() != null) && ventas.get(i).getCompra().getId().equals(idCompra)) {
                System.out.println(ventas.get(i));
                System.out.println(ventas.get(i).getCompra());
                System.out.println(ventas.get(i).getCompra().getId());
                ventasCompra.add(ventas.get(i));
            }
        }
        System.out.println(ventasCompra);
        return ventasCompra;
    }

    @GetMapping("/ventas/total/cardId={id}")
    public Integer encontrarTotalVentasPorCarta(@PathVariable("id") Integer idCarta) {
        List<Venta> ventas = ventaService.encontrarTodas();
        List<Venta> ventasSinComprar = new ArrayList<Venta>();
        for (int i = 0; i < ventas.size(); i++) {
            if (ventas.get(i).getCompra() == null && ventas.get(i).getCarta().getId().equals(idCarta)) {
                ventasSinComprar.add(ventas.get(i));
            }
        }
        Integer total = 0;
        for (int i = 0; i < ventasSinComprar.size(); i++) {
            total += ventasSinComprar.get(i).getAmount();
        }
        if (total != null) {
            return total;
        } else {
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