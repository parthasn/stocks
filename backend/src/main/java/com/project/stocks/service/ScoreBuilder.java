package com.project.stocks.service;


import com.project.stocks.dto.YearInfo;
import com.project.stocks.model.Score;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ScoreBuilder {

    private final String Increasing = "Increasing";
    private final String Decreasing = "Decreasing";

    private Score score = new Score();
    public ScoreBuilder withPE(Integer pe) {
        if(pe >= 1 && pe <=20)
            score.addValue(5);
        else if(pe >= 21 && pe <=40)
            score.addValue(4);
        else if(pe >= 41 && pe <=60)
            score.addValue(3);
        else if(pe >= 61 && pe <=80)
            score.addValue(2);
        else
            score.addValue(1);
        return this;
    }

    public Score build() {
        return score;
    }


    public ScoreBuilder withOPM(List<YearInfo> opmList) {
        score.addValue(calculateYearlyStatistics(opmList, Increasing));
        return this;
    }

    public ScoreBuilder withNPM(List<YearInfo> npmList) {
        score.addValue(calculateYearlyStatistics(npmList, Increasing));
        return this;
    }

    public ScoreBuilder withRevenue(List<YearInfo> revenueDetails) {
        score.addValue(calculateYearlyStatistics(revenueDetails, Increasing));
        return this;
    }

    public ScoreBuilder withBorrowings(List<YearInfo> borrowingsDetails) {
        score.addValue(calculateYearlyStatistics(borrowingsDetails, Decreasing));
        return this;
    }

    public ScoreBuilder withOtherLiabilities(List<YearInfo> otherLiabilitiesDetails) {
        score.addValue(calculateYearlyStatistics(otherLiabilitiesDetails, Decreasing));
        return this;
    }

    /*
    1.  If logic is "Increasing" then the score will increase if present
        year value is greater than previous year value.
    2.  If logic is "Decreasing" then the score will increase if present
        year value is less than previous year value.
    */
    private int calculateYearlyStatistics(List<YearInfo> inputList, String logic) {
        if(logic == null || (logic != null && logic.equals("")) || inputList == null)
            return 0;
        List<YearInfo> last6YearsOPMList = getLast6YearsRecordInDescendingOrder(inputList);
        int score = 0;
        for(int i = 1; i < last6YearsOPMList.size(); i++){
            int presentYear = last6YearsOPMList.get(i-1).getValue();
            int previousYear = last6YearsOPMList.get(i).getValue();
            if(logic.equalsIgnoreCase(Increasing)){
                if(presentYear > previousYear)
                    score++;
            }
            else if(logic.equalsIgnoreCase(Decreasing)){
                if(presentYear < previousYear)
                    score++;
            }
        }
        return score;
    }

    private List<YearInfo> getLast6YearsRecordInDescendingOrder(List<YearInfo> inputList){
        List<YearInfo> last6Years = inputList.stream()
                .sorted((a,b) -> b.getYear()-a.getYear())
                .limit(6)
                .collect(Collectors.toList());
        return last6Years;
    }
}
