if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "app.main:app",
        log_level="info",
        reload=True
    )

# Remove reload true when back-end is deployed