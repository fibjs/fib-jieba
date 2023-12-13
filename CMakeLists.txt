cmake_minimum_required(VERSION 2.6)

file(GLOB_RECURSE src_list "${PROJECT_SOURCE_DIR}/nodejieba/lib/*.c*")

include_directories("${PROJECT_SOURCE_DIR}/nodejieba/deps")

set(CMAKE_CXX_STANDARD 11)

include(fib-addon/common.cmake)
