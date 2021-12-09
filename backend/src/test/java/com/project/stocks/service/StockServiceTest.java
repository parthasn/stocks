package com.project.stocks.service;

import com.project.stocks.dto.*;
import com.project.stocks.model.Score;
import com.project.stocks.repository.StockRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class StockServiceTest {

    private StockService stockService;

    private StockRepository stockRepository;

    private ScoreBuilder scoreBuilder;

    @BeforeEach
    private void setup() {
        stockRepository = mock(StockRepository.class);
        scoreBuilder = mock(ScoreBuilder.class);
        stockService = new StockService(stockRepository);
    }

    @Test
    void allMetricsShouldBeEvaluatedInScoreCalculation() {
        Stock stock = new Stock();
        YearlyDetail yearlyDetail = new YearlyDetail();
        StockMetric stockMetric = new StockMetric(Unit.Blank, 0);
        stock.setPE(stockMetric);
        stock.setOpmDetails(yearlyDetail);
        stock.setNpmDetails(yearlyDetail);
        Debt debt = new Debt();
        debt.setBorrowingsDetails(yearlyDetail);
        debt.setOtherLiabilitiesDetails(yearlyDetail);
        debt.setRevenueDetails(yearlyDetail);
        stock.setDebt(debt);
        stock.setOpmDetails(yearlyDetail);
        stock.setOpmDetails(yearlyDetail);

        when(stockRepository.getStockDetails("ABC")).thenReturn(stock);

        stockService.calculateScore("ABC");

        verify(scoreBuilder, times(1)).withPE(stock.getPE().getValue());
        verify(scoreBuilder, times(1)).withOPM(stock.getOpmDetails().getYearInfo());
        verify(scoreBuilder, times(1)).withNPM(stock.getNpmDetails().getYearInfo());
        verify(scoreBuilder, times(1)).withBorrowings(stock.getDebt().getBorrowingsDetails().getYearInfo());
        verify(scoreBuilder, times(1)).withOtherLiabilities(stock.getDebt().getOtherLiabilitiesDetails().getYearInfo());
        verify(scoreBuilder, times(1)).withRevenue(stock.getDebt().getRevenueDetails().getYearInfo());
    }
}