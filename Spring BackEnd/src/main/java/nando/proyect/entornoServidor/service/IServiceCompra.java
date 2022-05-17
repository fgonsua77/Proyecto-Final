package nando.proyect.entornoServidor.service;

import java.util.List;
import nando.proyect.entornoServidor.model.Compra;
public interface IServiceCompra {
    List<Compra> encontrarTodas();
    void guardarCompra(Compra compra);
    Compra encontrarUnaCompraPorId(Integer id);
    void borrarCompra(Compra compra);
    
}
