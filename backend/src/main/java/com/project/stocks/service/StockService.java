package com.project.stocks.service;

import com.project.stocks.dto.Stock;
import com.project.stocks.model.Score;
import com.project.stocks.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StockService {

    private StockRepository stockRepository;;
    private ScoreBuilder scoreBuilder;

    @Autowired
    public StockService(StockRepository stockRepository, ScoreBuilder scoreBuilder) {
        this.scoreBuilder = scoreBuilder;
        this.stockRepository = stockRepository;
    }

    public Stock getStockDetails(String stockId) {
        return stockRepository.getStockDetails(stockId);
    }

    public Score calculateScore(String stockId) {
        Stock stock = getStockDetails(stockId);
        calculateStockMetrics(stock);
        return scoreBuilder.build();
    }

    private void calculateStockMetrics(Stock stock) {
        scoreBuilder.withPE(stock.getPE().getValue());
        scoreBuilder.withOPM(stock.getOpmDetails().getYearInfo());
        scoreBuilder.withNPM(stock.getNpmDetails().getYearInfo());
        scoreBuilder.withRevenue(stock.getDebt().getRevenueDetails().getYearInfo());
        scoreBuilder.withOtherLiabilities(stock.getDebt().getOtherLiabilitiesDetails().getYearInfo());
        scoreBuilder.withBorrowings(stock.getDebt().getBorrowingsDetails().getYearInfo());
    }
}
