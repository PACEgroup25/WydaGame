export const chartdata =[
    
    {
        chartLabel: "Overall User's Progress By Levels",
        labels: ["Onboarding Activities", "Level Name", "Profitability"],
        backgroundColor: ["rgb(180,221,221)"],
        data: [12, 10, 5],
    },
    {
        chartLabel: "Count of anonymous_id by scenario_name",
        labels: [
          "1.1 EVP",
          "1.2 CFO",
          "Company Breifing",
          "N/A",
          "Orientation to Simulation",
        ],
        backgroundColor: ["rgb(180,221,221)"],
        data: [22, 10, 30, 70, 50],
    },
    {
        chartLabel: "Count of Users by Attempts",
        labels: [
          "id1",
          "id2",
          "id3",
          "id4",
          "id5",
          "id6",
          "id7",
          "id8",
          "id9",
          "id10",
          "id11",
          "id12",
          "id13",
        ],
        backgroundColor: ["rgb(180,221,221)"],
        data: [14, 6, 8, 9, 9, 2, 5, 11, 24, 9, 6, 8, 66],
    },
    {
        chartLabel: "User's Reflection Quality",
        labels: ["low", "high"],
        backgroundColor: ["rgba(222,90,90,1)", "rgba(180,221,221,1)"],
        data: [300, 150],
    },
    

    {
        chartLabel: "Cohort Progress by Levels",
        labels: ["5d5f86144b98850017a51fea", "5d7738a41373480017b2c5d1", "N/A"],
        backgroundColor: ["rgba(180,221,221,1)"],
        data: [32,79,66],
    },

    {
        chartLabel: "Average of Points by Scenario",
        labels: ["5da6abe61c51520017d991ee", "5da6b0ce1c520017d991ef", "5dd4af7d94bb020017fde6e4", "5e3b8128a3681e0017454ed4"], // scenario_id labels
        type: "bar",
        data: [ // ignore this if using datasets
          // leave blank or remove if you use datasets[]
        ],
        datasets: [
          {
            label: "0573a9b9-c9fc-4aa6-a340-17909a6c34d2",
            data: [0, 0, 2.22, 280],
            backgroundColor: "rgba(59, 130, 246, 1)" 
          },
          {
            label: "3db4e706-7d53-470f-b483-c95b11fb41ca",
            data: [0, 0, 0, 0],
            backgroundColor: "rgba(167, 243, 208, 1)" 
          },
          {
            label: "7ec46834-46ef-4070-ba12-fff7fbbe9f79",
            data: [0, 0, 0, 126.67],
            backgroundColor: "rgba(45, 212, 191, 1)" 
          },

          {
            label: "d94a8d18-b494-4ac3-88d6-c322b9e29f83",
            data: [1.61, 1.80, 1.76, 140],
            backgroundColor: "rgba(52, 211, 153, 1)" 
          },

          {
            label: "f5bfae42-e616-4357-8296-a01e750bb552",
            data: [0, 0, 0, 280],
            backgroundColor: "rgba(147, 197, 253, 1)" 
          }
          
        ]
      },

      {
        chartLabel: "Top 3 Scorers",
        labels: [
          "d94a8d18-b494-4ac3-88d6-c322b9e29f83",
          "0573a9b9-c9fc-4aa6-a340-17909a6c34d2",
          "7ec46834-46ef-4070-ba12-fff7fbbe9f79",
        ],
        backgroundColor: ["rgb(180,221,221)"],
        data: [1260, 460, 380],
    }
      
    
    
    
]