package nando.proyect.entornoServidor.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import nando.proyect.entornoServidor.model.Venta;
import nando.proyect.entornoServidor.service.IServiceVenta;

@RestController
@RequestMapping("/sale")

@CrossOrigin(origins = "http://localhost:3000", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT })
public class VentaRESTController {
    @Autowired
    private IServiceVenta ventaService;

    @GetMapping("/ventas")
    public List<Venta> encontrarTodas() {
        return ventaService.encontrarTodas();
    }

    @GetMapping("/ventasSinComprar")
    public List<Venta> encontrarTodasLasVentasSinComprar() {
        List<Venta> ventas = ventaService.encontrarTodas();
        List<Venta> ventasSinComprar = new ArrayList<Venta>();
        for (Venta venta : ventas) {
            if (venta.getComprador() == null) {
                ventasSinComprar.add(venta);
            }
        }
        return ventasSinComprar;
    }

    @GetMapping("/compras/username={username}")
    public List<Venta> encontrarComprasPorUsuario(@PathVariable("username") String username) {
        System.out.println(username);
        List<Venta> ventas = ventaService.encontrarTodas();
        List<Venta> ventasFiltradas = new ArrayList<Venta>();
        for (Venta venta : ventas) {
            System.out.println(venta);
            if (venta.getComprador() != null) {
                if (venta.getComprador().getUsername().equals(username)) {
                    ventasFiltradas.add(venta);
                }
            }
        }
        return ventasFiltradas;
    }

    @GetMapping("/saleId={id}")
    public Venta showSale(@PathVariable("id") Integer idSale) {
        return ventaService.encontrarUnaVentaPorId(idSale);
    }

    @GetMapping("/ventas/username={username}")
    public List<Venta> showSaleByUser(@PathVariable("username") String username) {
        List<Venta> ventas = ventaService.encontrarTodas();
        List<Venta> ventasFiltradas = new ArrayList<Venta>();
        for (Venta venta : ventas) {
            if ((venta.getVendedor().getUsername().equals(username))) {
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
            if (ventas.get(i).getCarta().getId().equals(idCarta)) {
                ventasSinComprar.add(ventas.get(i));
            }
        }
        return ventasSinComprar;
    }

    @GetMapping("/ventasCompletadas/username={username}")
    public List<Venta> encontrarVentasCompletadas(@PathVariable("username") String username) {
        List<Venta> ventas = ventaService.encontrarTodas();
        List<Venta> ventasFiltradas = new ArrayList<Venta>();
        for (Venta venta : ventas) {
            if ((venta.getVendedor().getUsername().equals(username)) && (venta.getConfirmationdate() != null)
                    && (venta.getDireccion() != null)) {
                ventasFiltradas.add(venta);
            }
        }
        return ventasFiltradas;
    }

    @GetMapping("/totalVentasCompletadas/username={username}")
    public Integer encontrarTotalVentasCompletadas(@PathVariable("username") String username) {
        List<Venta> ventas = ventaService.encontrarTodas();
        List<Venta> ventasFiltradas = new ArrayList<Venta>();
        for (Venta venta : ventas) {
            if ((venta.getDireccion().getUsuario().getUsername().equals(username))
                    && (venta.getConfirmationdate() != null) && (venta.getDireccion() != null)) {
                ventasFiltradas.add(venta);
            }
        }
        return ventasFiltradas.size();
    }

    @GetMapping("/ventasSinComprar/carta/cardId={id}")
    public List<Venta> encontrarVentasSinComprarPorCarta(@PathVariable("id") Integer idCarta) {
        List<Venta> ventas = ventaService.encontrarTodas();
        List<Venta> ventasSinComprar = new ArrayList<Venta>();
        for (int i = 0; i < ventas.size(); i++) {
            if (ventas.get(i).getConfirmationdate() == null  && ventas.get(i).getCarta().getId().equals(idCarta)) {
                ventasSinComprar.add(ventas.get(i));
            }
        }
        return ventasSinComprar;
    }

    @GetMapping("/ventasSinComprar/username={username}")
    public List<Venta> encontrarVentasSinComprarPorUsuario(@PathVariable("username") String username) {
        List<Venta> ventas = ventaService.encontrarTodas();
        List<Venta> ventasSinComprar = new ArrayList<Venta>();
        for (int i = 0; i < ventas.size(); i++) {
            if (ventas.get(i).getVendedor().getUsername().equals(username)) {
                if (ventas.get(i).getComprador() == null) {
                    ventasSinComprar.add(ventas.get(i));
                }
            }

        }
        return ventasSinComprar;
    }

    @GetMapping("/ventasTotalesSinComprar/username={username}")
    public Integer encontrarTotalVentasSinComprarPorUsuario(@PathVariable("username") String username) {
        List<Venta> ventas = ventaService.encontrarTodas();
        List<Venta> ventasSinComprar = new ArrayList<Venta>();
        for (int i = 0; i < ventas.size(); i++) {
            if(ventas.get(i).getComprador() == null){
                if (ventas.get(i).getVendedor().getUsername().equals(username)) {
                    ventasSinComprar.add(ventas.get(i));
                }
            }
            
        }
        Integer total = ventasSinComprar.size();
        return total;
    }

    @GetMapping("/preciomenor/cardId={id}")
    public Venta encontrarLaVentaMenorPorCarta(@PathVariable("id") Integer idCarta) {
        Sort sort = Sort.by("price").ascending();
        List<Venta> ventas = ventaService.encontrarTodasFiltradas(sort);
        System.out.println(ventas);
        System.out.println(ventas.get(0).getCarta());
        List<Venta> ventasSinComprar = new ArrayList<Venta>();
        for (int i = 0; i < ventas.size(); i++) {
            if (ventas.get(i).getPaymentdate() == null && ventas.get(i).getCarta().getId().equals(idCarta)) {
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

    @GetMapping("/ventas/preciomenor/username={username}")
    public Venta encontrarLaVentaMenor(@PathVariable("username") String username) {
        Sort sort = Sort.by("price").ascending();
        List<Venta> ventas = ventaService.encontrarTodasFiltradas(sort);
        List<Venta> ventasDelUsuario = new ArrayList<Venta>();
        for (int i = 0; i < ventas.size(); i++) {
            if (ventas.get(i).getVendedor().getUsername().equals(username)) {
                ventasDelUsuario.add(ventas.get(i));
            }
        }
        Venta ventaMenor = ventasDelUsuario.get(0);
        if (ventaMenor != null) {
            return ventaMenor;
        } else {
            return null;
        }
    }

    @GetMapping("/total/cardId={id}")
    public Integer encontrarTotalVentasPorCarta(@PathVariable("id") Integer idCarta) {
        List<Venta> ventas = ventaService.encontrarTodas();
        List<Venta> ventasSinComprar = new ArrayList<Venta>();
        for (int i = 0; i < ventas.size(); i++) {
            if (ventas.get(i).getPaymentdate() == null && ventas.get(i).getCarta().getId().equals(idCarta)) {
                ventasSinComprar.add(ventas.get(i));
            }
        }
        Integer total = 0;
        for (int i = 0; i < ventasSinComprar.size(); i++) {
            total += ventasSinComprar.get(i).getAmount();
        }
        return total;
    }

    @PostMapping("/save")
    public void saveSale(@RequestBody Venta venta) {
        ventaService.guardarVenta(venta);
    }

    @PostMapping("/saveVentas")
    public void saveSale(@RequestBody List<Venta> ventas) {
        for (Venta venta : ventas) {
            ventaService.guardarVenta(venta);
        }
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