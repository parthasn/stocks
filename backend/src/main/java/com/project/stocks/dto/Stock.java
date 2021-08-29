package com.project.stocks.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;

public class Stock {

    @JsonProperty("stockId")
    private String id;

    @JsonProperty("MarketCap")
    private String marketCap;

    @JsonProperty("PE")
    private String pE;

    @JsonProperty("FaceValue")
    private String faceValue;

    @JsonProperty("Dividend")
    private String dividend;

    @JsonProperty("OPM")
    private List<YearInfo> opmDetails = new ArrayList<>();

    @JsonProperty("NPM")
    private List<YearInfo> npmDetails = new ArrayList<>();

    @JsonProperty("Debt")
    private Debt debt;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getMarketCap() {
        return marketCap;
    }

    public void setMarketCap(String marketCap) {
        this.marketCap = marketCap;
    }

    public String getpE() {
        return pE;
    }

    public void setpE(String pE) {
        this.pE = pE;
    }

    public String getFaceValue() {
        return faceValue;
    }

    public void setFaceValue(String faceValue) {
        this.faceValue = faceValue;
    }

    public String getDividend() {
        return dividend;
    }

    public void setDividend(String dividend) {
        this.dividend = dividend;
    }

    public List<YearInfo> getOpmDetails() {
        return opmDetails;
    }

    public void setOpmDetails(List<YearInfo> opmDetails) {
        this.opmDetails = opmDetails;
    }

    public List<YearInfo> getNpmDetails() {
        return npmDetails;
    }

    public void setNpmDetails(List<YearInfo> npmDetails) {
        this.npmDetails = npmDetails;
    }

    public Debt getDebt() {
        return debt;
    }

    public void setDebt(Debt debt) {
        this.debt = debt;
    }

    @Override
    public String toString() {
        return "Stock{" +
                "id='" + id + '\'' +
                ", marketCap='" + marketCap + '\'' +
                ", pE='" + pE + '\'' +
                ", faceValue='" + faceValue + '\'' +
                ", dividend='" + dividend + '\'' +
                ", opmDetails=" + opmDetails +
                ", npmDetails=" + npmDetails +
                ", debt=" + debt +
                '}';
    }
}
