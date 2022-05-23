package nando.proyect.entornoServidor.service.db;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import nando.proyect.entornoServidor.model.Venta;
import nando.proyect.entornoServidor.repository.VentaRepository;
import nando.proyect.entornoServidor.service.IServiceVenta;
@Service
public class ServiceVentaImpl implements IServiceVenta {
    @Autowired
    private VentaRepository ventaRepository;

    @Override
    public void borrarVenta(Venta venta) {
        // TODO Auto-generated method stub
        ventaRepository.delete(venta);
    }

    @Override
    public List<Venta> encontrarTodas() {
        // TODO Auto-generated method stub
        return ventaRepository.findAll();
    }
    @Override
    public List<Venta> encontrarTodasFiltradas(Sort sort) {
        return ventaRepository.findAll(sort);
    }
    @Override
    public Venta encontrarUnaVentaPorId(Integer id) {
        // TODO Auto-generated method stub
        return ventaRepository.findById(id).get();
    }

    @Override
    public void guardarVenta(Venta venta) {
        // TODO Auto-generated method stub
        ventaRepository.save(venta);
    }
}
