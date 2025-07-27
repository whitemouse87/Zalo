import React from "react";
import { Box, Button, Icon, Page, Text, Grid } from "zmp-ui";

function HomePage() {
  const handleNavigate = (section) => {
    console.log(`Navigating to ${section}`);
    // Thêm logic điều hướng ở đây
  };

  const courses = [
    {
      id: 1,
      title: "Toán học",
      description: "Học toán cơ bản đến nâng cao",
      icon: "zi-calculator",
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Tiếng Anh",
      description: "Nâng cao kỹ năng tiếng Anh",
      icon: "zi-chat",
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Khoa học",
      description: "Khám phá thế giới khoa học",
      icon: "zi-search",
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: "Lịch sử",
      description: "Tìm hiểu lịch sử Việt Nam",
      icon: "zi-clock-1",
      color: "bg-orange-500"
    }
  ];

  const quickActions = [
    { title: "Bài học hôm nay", icon: "zi-book", action: "today-lessons" },
    { title: "Luyện tập", icon: "zi-edit", action: "practice" },
    { title: "Kiểm tra", icon: "zi-list-1", action: "quiz" },
    { title: "Tiến độ", icon: "zi-chart", action: "progress" }
  ];

  return (
    <Page className="bg-gray-50">
      {/* Header */}
      <Box className="p-4 bg-white shadow-sm">
        <Box className="flex items-center justify-between">
          <Box>
            <Text.Title size="large" className="text-gray-800">
              Chào mừng trở lại! 👋
            </Text.Title>
            <Text size="small" className="text-gray-600">
              Hôm nay bạn muốn học gì?
            </Text>
          </Box>
          <Icon 
            icon="zi-user" 
            className="w-10 h-10 p-2 text-blue-600 bg-blue-100 rounded-full" 
          />
        </Box>
      </Box>

      {/* Quick Actions */}
      <Box className="p-4">
        <Text.Title size="medium" className="mb-3 text-gray-800">
          Hành động nhanh
        </Text.Title>
        <Grid columnCount={2} gap={12}>
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="tertiary"
              className="flex flex-col items-center justify-center h-20 bg-white border-0 shadow-sm"
              onClick={() => handleNavigate(action.action)}
            >
              <Icon icon={action.icon} className="mb-1 text-xl text-blue-600" />
              <Text size="small" className="text-gray-700">
                {action.title}
              </Text>
            </Button>
          ))}
        </Grid>
      </Box>

      {/* Courses Section */}
      <Box className="p-4">
        <Box className="flex items-center justify-between mb-3">
          <Text.Title size="medium" className="text-gray-800">
            Môn học
          </Text.Title>
          <Button 
            size="small" 
            variant="tertiary"
            onClick={() => handleNavigate("all-courses")}
          >
            <Text size="small" className="text-blue-600">Xem tất cả</Text>
          </Button>
        </Box>

        <Box className="space-y-3">
          {courses.map((course) => (
            <Box
              key={course.id}
              className="p-4 bg-white border border-gray-100 shadow-sm rounded-xl"
              onClick={() => handleNavigate(`course-${course.id}`)}
            >
              <Box className="flex items-center space-x-3">
                <Box className={`w-12 h-12 ${course.color} rounded-lg flex items-center justify-center`}>
                  <Icon icon={course.icon} className="text-xl text-white" />
                </Box>
                <Box className="flex-1">
                  <Text.Title size="medium" className="mb-1 text-gray-800">
                    {course.title}
                  </Text.Title>
                  <Text size="small" className="text-gray-600">
                    {course.description}
                  </Text>
                </Box>
                <Icon icon="zi-arrow-right" className="text-gray-400" />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Today's Progress */}
      <Box className="p-4">
        <Text.Title size="medium" className="mb-3 text-gray-800">
          Tiến độ hôm nay
        </Text.Title>
        <Box className="p-4 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl">
          <Box className="flex items-center justify-between mb-2">
            <Text size="small" className="opacity-90">Bài học hoàn thành</Text>
            <Text size="small" className="font-bold">3/5</Text>
          </Box>
          <Box className="w-full h-2 mb-3 bg-blue-400 rounded-full">
            <Box className="h-2 bg-white rounded-full" style={{width: '60%'}}></Box>
          </Box>
          <Text size="small" className="opacity-90">
            Tuyệt vời! Bạn đã hoàn thành 60% mục tiêu hôm nay
          </Text>
        </Box>
      </Box>

      {/* Study Streak */}
      <Box className="p-4 pb-8">
        <Box className="p-4 bg-white border border-gray-100 shadow-sm rounded-xl">
          <Box className="flex items-center justify-between">
            <Box>
              <Text.Title size="medium" className="mb-1 text-gray-800">
                Chuỗi học tập 🔥
              </Text.Title>
              <Text size="small" className="text-gray-600">
                Bạn đã học liên tục 7 ngày!
              </Text>
            </Box>
            <Box className="text-center">
              <Text.Title size="xLarge" className="text-orange-500">7</Text.Title>
              <Text size="xSmall" className="text-gray-500">ngày</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Page>
  );
}

export default HomePage;