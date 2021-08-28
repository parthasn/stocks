package com.project.stocks.service;

import com.project.stocks.dto.Stock;
import com.project.stocks.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StockService {

    private StockRepository stockRepository;

    @Autowired
    public StockService(StockRepository stockRepository) {
        this.stockRepository = stockRepository;
    }

    public Stock getStockDetails(String stockId) {
        stockRepository.getStockDetails(stockId);
        return null;
    }
}
