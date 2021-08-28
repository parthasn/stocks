package com.project.stocks.controller;

import com.project.stocks.dto.Stock;
import com.project.stocks.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value = "/stock")
public class StocksController {

    @Autowired
    private StockService stockService;

    @GetMapping(value = "/{stockId}")
    private Stock getStockDetails(@PathVariable(value = "stockId") String stockId) {
        return stockService.getStockDetails(stockId);
    }

}
