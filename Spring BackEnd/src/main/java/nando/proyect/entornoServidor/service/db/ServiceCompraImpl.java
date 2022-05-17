package nando.proyect.entornoServidor.service.db;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nando.proyect.entornoServidor.model.Compra;
import nando.proyect.entornoServidor.repository.CompraRepository;
import nando.proyect.entornoServidor.service.IServiceCompra;
@Service
public class ServiceCompraImpl implements IServiceCompra {
    @Autowired
    private CompraRepository compraRepository;
    
    @Override
    public void borrarCompra(Compra compra) {
        compraRepository.delete(compra);
    }

    @Override
    public List<Compra> encontrarTodas() {
        // TODO Auto-generated method stub
        return compraRepository.findAll();
    }

    @Override
    public Compra encontrarUnaCompraPorId(Integer id) {
        // TODO Auto-generated method stub
        return compraRepository.findById(id).get();
    }

    @Override
    public void guardarCompra(Compra compra) {
        // TODO Auto-generated method stub
        compraRepository.save(compra);
    }
    
}
